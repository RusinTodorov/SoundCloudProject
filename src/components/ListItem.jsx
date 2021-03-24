import { Collapse, Button } from 'react-bootstrap';
import { useState } from 'react';
import SmallTrackCard from './SmallTrackCard';
import generateKey from './Utils/generateKey';

export default function ListItem({ tracks, uploadedBy }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="smallCard"
                aria-expanded={open}
            >
                @{uploadedBy}
            </Button>
            <Collapse in={open}>
                <div id="smallCard">
                    {tracks.map(({ track, img, audio }) => {

                        return <SmallTrackCard track={track} img={img} audio={audio} key={generateKey()} />;
                    })}
                </div>
            </Collapse>
        </>
    );
}