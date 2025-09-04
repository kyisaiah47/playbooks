"use client"

import { GuidedNotePage } from "@/components/guided-note-page"

export function Music() {
  return (
    <GuidedNotePage
      title="Music & Playlist Planning"
      description="Curate the perfect soundtrack for your wedding day, from ceremony to reception."
      sections={[
        {
          title: "Ceremony Music",
          prompts: [
            "What songs do you want for the processional and recessional?",
            "Do you want music during the ceremony (signing, unity ceremony)?",
            "Are there any religious or cultural musical requirements?",
            "What's your backup plan for live vs. recorded music?"
          ],
          examples: [
            "Processional: Canon in D, At Last, Perfect by Ed Sheeran",
            "Recessional: Signed Sealed Delivered, September by Earth Wind & Fire",
            "Unity ceremony: acoustic version of your first dance song",
            "Have recorded versions ready if live musicians have issues"
          ]
        },
        {
          title: "Cocktail Hour & Dinner",
          prompts: [
            "What vibe do you want during cocktail hour (upbeat, mellow, sophisticated)?",
            "What dinner music will encourage conversation but not overpower?",
            "Are there any songs that represent your relationship story?",
            "Do you want to take requests from guests during this time?"
          ],
          examples: [
            "Jazz standards, acoustic covers, light indie pop",
            "Instrumental versions, soft rock, singer-songwriter",
            "Songs from your first date, travel memories, special moments",
            "Set up request cards at tables or online form"
          ]
        },
        {
          title: "Dancing & Party Music",
          prompts: [
            "What's your first dance song and do you need it edited?",
            "What songs will get different generations dancing?",
            "Are there any cultural or family traditions to include?",
            "What songs absolutely must be played vs. must NOT be played?"
          ],
          examples: [
            "First dance: full song vs. 2-3 minute edit for comfort",
            "Mix of current hits, 80s/90s classics, Motown, country",
            "Cultural dances, family favorites, meaningful traditions",
            "Must play: your favorites; Don't play: ex's favorite song"
          ]
        },
        {
          title: "Special Moments & Timeline",
          prompts: [
            "What songs do you want for parent dances and special dances?",
            "How will music cue key reception events (cake cutting, bouquet toss)?",
            "What's your plan for the last song and send-off?",
            "How will you communicate timing and transitions to your DJ/band?"
          ],
          examples: [
            "Father-daughter: What a Wonderful World, Isn't She Lovely",
            "Cake cutting: Sugar, Cake by the Ocean, Sweet Caroline",
            "Last dance: slow romantic song for intimate moment",
            "Create timeline with music cues and share with DJ/coordinator"
          ]
        }
      ]}
      tips={[
        "Create playlists for different parts of the day with 2-3x more songs than needed",
        "Test all songs beforehand - some have explicit lyrics or awkward intros",
        "Give your DJ/band a 'do not play' list along with your favorites",
        "Consider your venue's sound system capabilities and restrictions",
        "Have backup playlists ready in case live entertainment has issues"
      ]}
    />
  )
}