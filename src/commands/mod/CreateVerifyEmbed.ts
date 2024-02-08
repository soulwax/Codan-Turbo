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
      description: `Welcome to Imperial Cult. React with 👍 to verify yourself and gain access to features.
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
    (message as Message<boolean>).react("👍");
  }
}
