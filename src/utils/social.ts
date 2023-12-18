type SocialPlatform = {
  name: string;
  icon: string;
  profileLink(username: string, endpoint?: string): string;
};

export type SocialLink = {
  platform: SocialPlatform;
  username: string;
  link: string;
};

export const socialLink = (
  platform: SocialPlatform,
  username: string,
  endpoint?: string
): SocialLink => {
  return {
    platform,
    username: username,
    link: platform.profileLink(username, endpoint),
  };
};

export const ownWebsite: SocialPlatform = {
  name: 'Website',
  icon: 'link',
  profileLink(username) {
    return `https://${username}`;
  },
};

export const twitter: SocialPlatform = {
  name: 'Twitter',
  icon: 'brand-twitter',
  profileLink(username) {
    return `https://twitter.com/${username}`;
  },
};

export const vk: SocialPlatform = {
  name: 'VK',
  icon: 'brand-vk',
  profileLink(username) {
    return `https://vk.com/${username}`;
  },
};

export const youtube: SocialPlatform = {
  name: 'YouTube',
  icon: 'brand-youtube',
  profileLink(username) {
    return `https://youtube.com/@${username}`;
  },
};

export const itch: SocialPlatform = {
  name: 'Itch.io',
  icon: 'brand-itch',
  profileLink(username, endpoint = '') {
    return `https://${username}.itch.io/${endpoint}`;
  },
};

export const discord: SocialPlatform = {
  name: 'Discord',
  icon: 'brand-discord',
  profileLink(username) {
    return `https://discord.com/${username}`;
  },
};

export const steam: SocialPlatform = {
  name: 'Steam',
  icon: 'brand-steam',
  profileLink(username) {
    return `https://store.steampowered.com/app/${username}`;
  },
};

export const github: SocialPlatform = {
  name: 'GitHub',
  icon: 'brand-github',
  profileLink(username) {
    return `https://github.com/${username}`;
  },
};
