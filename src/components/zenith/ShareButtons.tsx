"use client";

import { useState } from "react";
import { Twitter, Linkedin, Link2, Check } from "lucide-react";

interface ShareButtonsProps {
  title: string;
  url?: string;
}

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const shareUrl = url || (typeof window !== "undefined" ? window.location.href : "");

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-zenith-text/40 text-xs font-mono mr-2">SHARE:</span>
      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 text-zenith-text/50 hover:text-zenith-cyan transition-colors"
        aria-label="Share on Twitter"
      >
        <Twitter className="w-4 h-4" />
      </a>
      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 text-zenith-text/50 hover:text-zenith-cyan transition-colors"
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="w-4 h-4" />
      </a>
      <button
        onClick={copyToClipboard}
        className="p-2 text-zenith-text/50 hover:text-zenith-cyan transition-colors"
        aria-label="Copy link"
      >
        {copied ? <Check className="w-4 h-4 text-zenith-green" /> : <Link2 className="w-4 h-4" />}
      </button>
    </div>
  );
}
