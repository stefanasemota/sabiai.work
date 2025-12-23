
'use client';

import { Share2 } from 'lucide-react';
import { Button } from './ui/button';
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
        // Fallback to clipboard copy if sharing fails
        copyToClipboard();
      }
    } else {
      // Fallback for browsers that do not support the Web Share API
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
    <Button
      onClick={handleShare}
      className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white font-bold py-2 px-4 rounded-lg hover:from-teal-500 hover:to-cyan-600 transition-all duration-300 ease-in-out"
    >
      <Share2 className="mr-2 h-4 w-4" />
      Share The Ecosystem
    </Button>
  );
}
