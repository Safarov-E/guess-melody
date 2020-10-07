const questions = [
    {
        type: 'genre',
        genre: 'rock',
        answers: [
            {
                src: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Largo_spiccato_Vivaldi_BWV596.ogg',
                genre: 'rock'
            },
            {
                src: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Largo_spiccato_Vivaldi_BWV596.ogg',
                genre: 'pop'
            },
            {
                src: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Largo_spiccato_Vivaldi_BWV596.ogg',
                genre: 'jazz'
            },
            {
                src: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Largo_spiccato_Vivaldi_BWV596.ogg',
                genre: 'rock'
            }
        ]
    },
    {
        type: 'artist',
        song: {
            artist: 'Jim Beam',
            src: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Largo_spiccato_Vivaldi_BWV596.ogg',
        },
        answers: [
            {
                picture: 'http://placehold.it/134x134',
                artist: "John Snowm"
            },
            {
                picture: 'http://placehold.it/134x134',
                artist: "Jack Daniels"
            },
            {
                picture: 'http://placehold.it/134x134',
                artist: "Jim Beam"
            }
        ]
    }
]

export default questions