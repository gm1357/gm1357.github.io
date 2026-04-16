import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring } from "framer-motion";
import SocialLinks from "../components/SocialLinks";
import { useTranslation, usePageMeta } from "../i18n";

const cardStyle =
  "rounded-2xl border border-white/10 bg-surface-darker/30 backdrop-blur-md shadow-xl shadow-black/30 p-8";

export default function Home() {
  const [flipped, setFlipped] = useState(false);
  const frontRef = useRef(null);
  const backRef = useRef(null);
  const { t } = useTranslation();
  usePageMeta("meta_title", "meta_description");

  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const springConfig = { stiffness: 200, damping: 50 };
  const springX = useSpring(tiltX, springConfig);
  const springY = useSpring(tiltY, springConfig);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    tiltX.set(y * -15);
    tiltY.set(x * 15);
  }

  function handleMouseLeave() {
    tiltX.set(0);
    tiltY.set(0);
  }

  useEffect(() => {
    if (typeof window === "undefined") return;

    const coarse = window.matchMedia("(hover: none) and (pointer: coarse)");
    if (!coarse.matches) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;

    const clamp = (v, min, max) => Math.min(Math.max(v, min), max);
    let baseBeta = null;
    let baseGamma = null;

    const handleOrientation = (event) => {
      const { beta, gamma } = event;
      if (beta == null || gamma == null) return;
      if (baseBeta == null) {
        baseBeta = beta;
        baseGamma = gamma;
        return;
      }
      tiltX.set(clamp(-(beta - baseBeta), -15, 15));
      tiltY.set(clamp(gamma - baseGamma, -15, 15));
    };

    const attach = () => {
      window.addEventListener("deviceorientation", handleOrientation);
    };

    const needsPermission =
      typeof DeviceOrientationEvent !== "undefined" &&
      typeof DeviceOrientationEvent.requestPermission === "function";

    let unlock;
    if (needsPermission) {
      unlock = () => {
        window.removeEventListener("touchend", unlock);
        DeviceOrientationEvent.requestPermission()
          .then((state) => {
            if (state === "granted") attach();
          })
          .catch(() => {});
      };
      window.addEventListener("touchend", unlock);
    } else {
      attach();
    }

    return () => {
      window.removeEventListener("deviceorientation", handleOrientation);
      if (unlock) window.removeEventListener("touchend", unlock);
    };
  }, [tiltX, tiltY]);

  useEffect(() => {
    if (flipped) {
      backRef.current?.focus();
    } else {
      frontRef.current?.focus();
    }
  }, [flipped]);

  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-6">
      <div className="perspective-1000 w-full max-w-2xl">
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX: springX,
            rotateY: springY,
            transformStyle: "preserve-3d",
          }}
        >
          <div
            className={`preserve-3d relative h-[34rem] sm:h-[26rem] motion-safe:transition-transform motion-safe:duration-700 ${flipped ? "rotate-y-180" : ""}`}
          >
            {/* FRONT */}
            <div
              ref={frontRef}
              tabIndex={-1}
              aria-hidden={flipped}
              inert={flipped ? "" : undefined}
              className={`backface-hidden [transform:rotateY(0deg)] absolute inset-0 flex flex-col items-center justify-center text-center outline-none ${cardStyle}`}
            >
              <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
                <span className="bg-gradient-to-r from-accent-from to-accent-to bg-clip-text text-transparent">
                  Gabriel Machado
                </span>
              </h1>
              <p className="mb-8 max-w-lg text-lg opacity-80">
                {t("home_subtitle")}
              </p>

              <div className="mb-10">
                <SocialLinks className="text-2xl" />
              </div>

              <div className="flex gap-4">
                <Link
                  to="/resume"
                  className="rounded-full bg-gradient-to-r from-accent-from to-accent-to px-6 py-2.5 font-medium text-white transition-opacity hover:opacity-90"
                >
                  {t("home_view_resume")}
                </Link>
                <button
                  onClick={() => setFlipped(true)}
                  aria-label={t("home_flip_to_about_aria")}
                  className="rounded-full border border-white/20 px-6 py-2.5 font-medium transition-colors hover:bg-white/10 cursor-pointer"
                >
                  {t("home_about_me")} &rarr;
                </button>
              </div>
            </div>

            {/* BACK */}
            <div
              ref={backRef}
              tabIndex={-1}
              aria-hidden={!flipped}
              inert={!flipped ? "" : undefined}
              className={`backface-hidden rotate-y-180 absolute inset-0 flex flex-col items-center justify-center text-center outline-none ${cardStyle}`}
            >
              <div className="mb-4 h-20 w-20 rounded-full bg-gradient-to-br from-accent-from/20 to-accent-to/20">
                <img
                  className="h-20 w-20 rounded-full"
                  src="https://github.com/gm1357.png"
                  alt="Gabriel Machado"
                />
              </div>
              <div className="space-y-4 text-base leading-relaxed opacity-90">
                <p>{t("home_about_p1")}</p>
                <p>{t("home_about_p2")}</p>
              </div>
              <button
                onClick={() => setFlipped(false)}
                aria-label={t("home_flip_to_hero_aria")}
                className="mt-6 rounded-full border border-white/20 px-6 py-2.5 font-medium transition-colors hover:bg-white/10 cursor-pointer"
              >
                &larr; {t("home_flip_back")}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
