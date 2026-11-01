'use client';

import { Share2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function ShareButton() {
  const { toast } = useToast();

  const handleShare = async () => {
    const shareData = {
      title: 'The Sabi Ecosystem',
      text: 'Niche Productivity. Cultural Context. Community Logic.',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        console.error('Error sharing:', error);
        copyToClipboard();
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href).then(
      () => {
        toast({
          title: 'Link Copied!',
          description: 'The page URL has been copied to your clipboard.',
        });
      },
      (err) => {
        console.error('Failed to copy text: ', err);
        toast({
          variant: 'destructive',
          title: 'Copy Failed',
          description: 'Could not copy the link to your clipboard.',
        });
      }
    );
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      className="btn btn--secondary text-sm"
    >
      <Share2 className="h-4 w-4" />
      <span>Share The Ecosystem</span>
    </button>
  );
}
