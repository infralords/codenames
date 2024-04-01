import _ from 'lodash';
import Color from '../utils/colors';
import seedrandom from 'seedrandom';

export function getGenerator (seed : string) {
    return seedrandom(seed)
}

export function getRandomSeed(){
    return Math.random().toString(36).slice(7)
}

export function generateCoopBoard (seed : string) : [Color[][],Color[][]]{
    const rng = getGenerator(seed)
    const teamA_board = getRandomBoard(rng)
    const teamB_board = getRandomBoard(rng) // <--- this board should not be initialize this way. Muck-up for the time being

    return [teamA_board,teamB_board]
}

export function getRandomBoard(rng : seedrandom.PRNG){
    return _.chunk(
        [
          ...(Array.from({ length: 13 }).fill(Color.GRAY) as Color[]),
          ...(Array.from({ length: 9 }).fill(Color.GREEN) as Color[]),
          ...(Array.from({ length: 3 }).fill(Color.BLACK) as Color[]),
        ].sort(() => rng() - 0.5),
        5,
    )
}
