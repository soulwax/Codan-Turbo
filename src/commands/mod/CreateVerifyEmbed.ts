<<<<<<< HEAD:src/commands/createVerifyEmbed.ts
import { SlashCommandBuilder } from "@discordjs/builders";
import { PermissionFlagsBits } from "discord-api-types/v9";
import type {
  APIEmbed,
  CacheType,
  CommandInteraction,
  Message,
  TextChannel,
} from "discord.js";
import {
  BOT_ICON,
  RED_COLOR,
  VERIFY_CHANNELS,
  VERIFY_TEMPLATE,
} from "../utils/constants.js";

export default {
  data: new SlashCommandBuilder()
    .setName("create-verify-embed")
    .setDescription("verify all users in the server")
    .setDefaultMemberPermissions(PermissionFlagsBits.DeafenMembers),
  async execute(interaction: CommandInteraction<CacheType>) {
    // get text channel
    const channel = (await interaction.channel?.fetch()) as TextChannel;

    // if not verify channel, return
    if (VERIFY_CHANNELS.includes(channel.name) === false) return;
=======
import type { APIEmbed, CommandInteraction, Message } from "discord.js";
import { PermissionFlagsBits } from "discord.js";
import { Discord, Slash } from "discordx";
import { BOT_ICON, RED_COLOR, VERIFY_TEMPLATE } from "../../lib/constants.js";
>>>>>>> origin/master:src/commands/mod/CreateVerifyEmbed.ts

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
<<<<<<< HEAD:src/commands/createVerifyEmbed.ts
      description: `**--- :flag_gb: Welcome to the Imperial Cult! :flag_gb: ---**
=======
      description: `**--- :flag_gb: Welcome to our Coding Server! :flag_gb: ---**
>>>>>>> origin/master:src/commands/mod/CreateVerifyEmbed.ts

We are dedicated members, who are professionally and in their spare time engaged alchemy and other occult arts, among them programming.
Most of the programmers here are trainees, students, apprentices or have started their own businesses. 

We are not helpdesk, but we are happy to answer a serious and level-headed question in between.
Any more words and this would be reddit tier so let's just be le it.


add 👍 to get verified (experimental feature)
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
<<<<<<< HEAD:src/commands/createVerifyEmbed.ts
  },
};
=======
  }
}
>>>>>>> origin/master:src/commands/mod/CreateVerifyEmbed.ts
