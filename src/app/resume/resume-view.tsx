"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import ResumeDocument from "./resume-document";

export default function ResumeView() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex min-h-screen flex-col font-sans bg-background text-foreground pt-28 md:pt-36 pb-20 px-4 transition-colors duration-300 print:p-0 print:m-0 print:bg-white print:text-black">
      {/* Exact 1-Page Print Stylesheet */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @page {
              size: A4 portrait;
              margin: 6mm 10mm;
            }
            @media print {
              html, body {
                background: white !important;
                color: black !important;
                margin: 0 !important;
                padding: 0 !important;
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
              }
              header, nav, footer, .no-print, [data-overlay-container] {
                display: none !important;
              }
              .resume-container {
                padding: 0 !important;
                margin: 0 !important;
                width: 100% !important;
                max-width: 100% !important;
                box-shadow: none !important;
              }
              .resume-sheet {
                padding: 0 !important;
                margin: 0 !important;
                width: 100% !important;
                max-width: 100% !important;
                box-shadow: none !important;
                border: none !important;
                border-radius: 0 !important;
              }
              .resume-sec, .resume-item {
                break-inside: avoid !important;
                page-break-inside: avoid !important;
              }
            }
          `,
        }}
      />

      {/* Top bar: back (left) + print / save (right) */}
      <div className="mx-auto w-full max-w-4xl shrink-0 no-print mb-6">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-between gap-4 bg-card/60 backdrop-blur-md border border-border/70 rounded-2xl p-3 px-4 shadow-sm"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Portfolio
          </Link>
          <div className="flex items-center gap-3">
            <Button
              onClick={handlePrint}
              variant="default"
              className="flex items-center gap-2 text-sm font-medium shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Printer className="h-4 w-4" />
              Save as PDF / Print
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Digital Interactive Resume Document */}
      <div className="mx-auto flex w-full max-w-4xl flex-1 items-center justify-center resume-container print:max-w-none print:w-full">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full print:w-full"
        >
          <ResumeDocument />
        </motion.div>
      </div>
    </div>
  );
}
