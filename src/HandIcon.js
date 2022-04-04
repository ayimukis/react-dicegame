import rock from './assets/rock.svg';
import scissor from './assets/scissor.svg';
import paper from './assets/paper.svg';

const HAND_IMAGES = {
    rock : rock,
    scissor : scissor,
    ropaperck : paper,
}

function HandIcon({value}) {
    const src = HAND_IMAGES[value];
    const alt = `${value}`;
    return <img src={src} alt={alt}/>
}

export default HandIcon
