import generateKey from './Utils/generateKey';
import audio from '../Rod Wave - Street Runner.mp3';
import img from '../Cover.jpg';
import ListItem from './ListItem';

export default function Users() {
    
    let data = [
        {
            tracks: [
                {
                    track: 'Rod Wave - Street Runner',
                    img,
                    audio,
                },
                {
                    track: 'Rod Wave - Street Runner',
                    img,
                    audio,
                }
            ],
            uploadedBy: 'Rusin'
        },
        {
            tracks: [
                {
                    track: 'Rod Wave - Street Runner',
                    img,
                    audio,
                },
            ],
            uploadedBy: 'Rusin'
        }];

    return (
        <>
            <h3>Users:</h3>
            <hr />
            <ol style={{position: 'relative'}}>
                {data.map(({tracks, uploadedBy}) => {
                
                    return (
                        <li key={generateKey()} style={{margin: '10px'}}>
                            <ListItem tracks={tracks} uploadedBy={uploadedBy}/>
                        </li>
                    );
                })}
            </ol>
        </>
    );
}