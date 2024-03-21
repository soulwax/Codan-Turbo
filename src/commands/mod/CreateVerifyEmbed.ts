import type { APIEmbed, CommandInteraction, Message } from "discord.js";
import { PermissionFlagsBits } from "discord.js";
import { Discord, Slash } from "discordx";
import { BOT_ICON, RED_COLOR, VERIFY_TEMPLATE } from "../../lib/constants.js";

@Discord()
export class CreateVerifyEmbed {
  @Slash({
    name: "create-verify-embed",
    description: "create a verify embed for users to react to",
    defaultMemberPermissions: PermissionFlagsBits.DeafenMembers,
  })
  async createVerifyEmbed(interaction: CommandInteraction) {
    // create verify embed
    const embed: APIEmbed = {
      color: RED_COLOR,
      title: "Verification process...",
      description: `**--- From a slumber that was forgotten by time. You seem curious as lights 
      start to flicker, like the activating organs of a terrible apparatus. ---**

      In the ethereal cloister of our digital gathering, we are fascinated guests, weaving our days and nights into an esoteric tapestry of 
      programming, medicine, alchemy and schizophrenic posting. The walkers among us are beginners, academics, apprentices, and those intrepid travelers who 
      have dared to chart their own path through the chaotic universe of these fields that only dare to raise more questions once a spark of an answer was achieved.

      We are not just custodians some jargon, but we generously share our hidden knowledge with searchers with questions framed in 
      honesty and curiosity. We are not just electrons turnings ones to zeros, but every process in between.
      Though we cast a cold distance on those fleeting, who cross our threshold, it is elysium for those persevering. 
      Only to be robbed of their wisdom and then disperse into the void, leaving nothing behind but mindless husks to the assembly, the immortal machine.

`,
      timestamp: new Date().toISOString(),
      footer: {
        text: VERIFY_TEMPLATE,
        icon_url: BOT_ICON,
      },
    };

    // send embed & get message
    const message = await interaction.reply({
      embeds: [embed],
      fetchReply: true,
    });

    // add reactions for verify role
    (message as Message<boolean>).react(":arrow_up:");
  }
}
