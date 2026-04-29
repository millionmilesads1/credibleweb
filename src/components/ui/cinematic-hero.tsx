"use client";

import React, { useEffect, useRef } from "react";
import { ArrowRight, MessageCircle, CheckCircle2 } from "lucide-react";

export interface CinematicHeroProps {
  title: string;
  highlightedTitle: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  bullets?: string[];
}

export function CinematicHero({
  title,
  highlightedTitle,
  subtitle,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
  bullets,
}: CinematicHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const fadingOutRef = useRef(false);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const fadeVideo = (targetOpacity: number, duration: number) => {
      const startOpacity = parseFloat(video.style.opacity || "0");
      const startTime = performance.now();

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentOpacity = startOpacity + (targetOpacity - startOpacity) * progress;
        video.style.opacity = currentOpacity.toString();

        if (progress < 1) {
          animationFrameRef.current = requestAnimationFrame(animate);
        }
      };

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const handleTimeUpdate = () => {
      const timeRemaining = video.duration - video.currentTime;
      if (timeRemaining <= 0.55 && !fadingOutRef.current) {
        fadingOutRef.current = true;
        fadeVideo(0, 500);
      }
    };

    const handleEnded = () => {
      video.style.opacity = "0";
      setTimeout(() => {
        video.currentTime = 0;
        fadingOutRef.current = false;
        video.play().catch(() => {});
        fadeVideo(1, 500);
      }, 100);
    };

    const handlePlay = () => {
      if (!fadingOutRef.current && parseFloat(video.style.opacity || "0") < 1) {
        fadeVideo(1, 500);
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);
    video.addEventListener("play", handlePlay);

    // Initial fade in
    fadeVideo(1, 500);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
      video.removeEventListener("play", handlePlay);
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap');
        
        .liquid-glass {
          background: rgba(255, 255, 255, 0.01);
          background-blend-mode: luminosity;
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          border: none;
          box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
        }
        
        .liquid-glass::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1.4px;
          background: linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%, rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
      `}} />
      <section className="relative w-full h-screen min-h-[700px] flex flex-col bg-black overflow-hidden pt-20">
        <video
          ref={videoRef}
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_115001_bcdaa3b4-03de-47e7-ad63-ae3e392c32d4.mp4"
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover translate-y-[17%]"
          style={{ opacity: 0 }}
        />
        
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center -translate-y-[10%]">
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl text-white mb-6 tracking-tight max-w-5xl mx-auto leading-tight"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            {title} <span className="text-white/80 italic">{highlightedTitle}</span>
          </h1>
          
          <div className="max-w-2xl w-full space-y-8 mt-4">
            <p className="text-white/90 text-lg leading-relaxed px-4">
              {subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={ctaHref}
                className="liquid-glass rounded-full px-8 py-4 text-white text-base font-medium hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                {ctaText}
                <ArrowRight className="w-5 h-5" />
              </a>
              
              {secondaryCtaText && secondaryCtaHref && (
                <a 
                  href={secondaryCtaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="liquid-glass rounded-full px-8 py-4 text-white text-base font-medium hover:bg-white/10 transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  {secondaryCtaText}
                </a>
              )}
            </div>

            {bullets && bullets.length > 0 && (
              <div className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-medium text-white/80">
                {bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-center gap-2 liquid-glass px-4 py-2 rounded-full">
                    <CheckCircle2 className="h-4 w-4 text-white" /> {bullet}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
