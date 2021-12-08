import chalk from 'chalk';
import { Event } from '../Interfaces';

export const event: Event = {
  name: 'ready',
  run: async (client) => {
    client.console.success(
      `${chalk.bold.green(`[CLIENT]`)} ${client.user.tag} ready`
    );
  },
};
