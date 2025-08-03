import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emojiFormat'
})
export class EmojiFormatPipe implements PipeTransform {

transform(value: string): string {
  return value
    .replace(/chien/gi, 'chien 🐶')
    .replace(/chat/gi, 'chat 🐱')
    .replace(/pizza/gi, 'pizza 🍕')
    .replace(/soleil/gi, 'soleil ☀️')
    .replace(/lune/gi, 'lune 🌙')
    .replace(/étoile/gi, 'étoile ⭐')
    .replace(/coeur/gi, 'coeur ❤️')
    .replace(/feu/gi, 'feu 🔥')
    .replace(/fleur/gi, 'fleur 🌸')
    .replace(/arbre/gi, 'arbre 🌳')
    .replace(/pluie/gi, 'pluie 🌧️')
    .replace(/neige/gi, 'neige ❄️')
    .replace(/vent/gi, 'vent 💨')
    .replace(/musique/gi, 'musique 🎵')
    .replace(/danse/gi, 'danse 💃')
    .replace(/sport/gi, 'sport 🏀')
    .replace(/foot/gi, 'foot ⚽')
    .replace(/tennis/gi, 'tennis 🎾')
    .replace(/vélo/gi, 'vélo 🚴')
    .replace(/voiture/gi, 'voiture 🚗')
    .replace(/bus/gi, 'bus 🚌')
    .replace(/train/gi, 'train 🚆')
    .replace(/avion/gi, 'avion ✈️')
    .replace(/bateau/gi, 'bateau 🚢')
    .replace(/maison/gi, 'maison 🏠')
    .replace(/ordinateur/gi, 'ordinateur 💻')
    .replace(/téléphone/gi, 'téléphone 📱')
    .replace(/livre/gi, 'livre 📖')
    .replace(/stylo/gi, 'stylo 🖊️')
    .replace(/école/gi, 'école 🏫')
    .replace(/travail/gi, 'travail 💼')
    .replace(/argent/gi, 'argent 💰')
    .replace(/banque/gi, 'banque 🏦')
    .replace(/nourriture/gi, 'nourriture 🍽️')
    .replace(/gâteau/gi, 'gâteau 🎂')
    .replace(/chocolat/gi, 'chocolat 🍫')
    .replace(/café/gi, 'café ☕')
    .replace(/thé/gi, 'thé 🍵')
    .replace(/eau/gi, 'eau 💧')
    .replace(/bière/gi, 'bière 🍺')
    .replace(/vin/gi, 'vin 🍷')
    .replace(/amour/gi, 'amour 💘')
    .replace(/santé/gi, 'santé 🏥')
    .replace(/médecin/gi, 'médecin 👨‍⚕️')
    .replace(/malade/gi, 'malade 🤒')
    .replace(/rire/gi, 'rire 😂')
    .replace(/triste/gi, 'triste 😢')
    .replace(/colère/gi, 'colère 😠')
    .replace(/surprise/gi, 'surprise 😲')
    .replace(/fatigué/gi, 'fatigué 😴')
    .replace(/heureux/gi, 'heureux 😄')
    .replace(/bonjour/gi, 'bonjour 👋')
    .replace(/au revoir/gi, 'au revoir 👋')
    .replace(/merci/gi, 'merci 🙏')
    .replace(/oui/gi, 'oui 👍')
    .replace(/non/gi, 'non 👎');
}


}
