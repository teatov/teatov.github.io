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

export const github: SocialPlatform = {
  name: 'GitHub',
  icon: 'brand-github',
  profileLink(username) {
    return `https://github.com/${username}`;
  },
};
