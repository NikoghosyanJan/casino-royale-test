export const GAME_BASE_URL = "https://gateway.eva-digital-playground.com/v0/casino/games/launch";

export const getGameUrl = (gameId: string, lang: string = 'en') => {
  const params = new URLSearchParams({
    gameId,
    channel: 'desktop',
    partnerKey: '0wl',
    lobbyUrl: 'https://chinchincasino.com',
    mode: 'demo',
    language: lang,
  });

  return `${GAME_BASE_URL}?${params.toString()}`;
};