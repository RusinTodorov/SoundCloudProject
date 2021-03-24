export default function generateKey() {
    return `${Math.random() + ''}_${new Date().getTime()}`;
}

//{tracks.map(({ track, img, audio }) => SmallTrackCard(track, img, audio, generateKey()))}