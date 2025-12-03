"use server";

import { personalizedAppRecommendations } from "@/ai/flows/personalized-app-recommendations";
import { AIApp, apps } from "@/lib/apps-data";

export async function getRecommendationsAction(): Promise<{
  success: boolean;
  data?: AIApp[];
  error?: string;
}> {
  // In a real application, this data would be dynamically generated
  // based on the logged-in user's data and activity.
  const userProfile =
    "A software developer and AI enthusiast interested in productivity tools, creative image generation, and exploring new AI capabilities.";
  const userActivity =
    "Has bookmarked several code generation apps and image editing tools. Frequently visits the 'Code' and 'Image' categories.";
  
  const availableApps = JSON.stringify(
    apps.map((app) => ({
      name: app.name,
      description: app.description,
      category: app.category,
    }))
  );

  try {
    const result = await personalizedAppRecommendations({
      userProfile,
      userActivity,
      availableApps,
    });
    
    // The AI flow returns an array of app names. We need to find the full app objects.
    const recommendedApps = result.recommendations
      .map(recName => apps.find(app => app.name.toLowerCase() === recName.toLowerCase()))
      .filter((app): app is AIApp => !!app);

    return { success: true, data: recommendedApps };
  } catch (error) {
    console.error("Error getting recommendations:", error);
    return { success: false, error: "Failed to generate recommendations." };
  }
}
