import reactionImage from './icon-reaction.svg'
import memoryImage from './icon-memory.svg'
import verbalImage from './icon-verbal.svg'
import visualImage from './icon-visual.svg'

const data = [
    {
        type: 'reaction',
        color: 'text-lightRed',
        background: 'bg-red-50',
        logo: reactionImage,
        label: 'Reaction',
        score: 80,
    },
    {
        type: 'memory',
        color: 'text-orangeyYellow',
        background: 'bg-yellow-50',
        logo: memoryImage,
        label: 'Memory',
        score: 92,
    },
    {
        type: 'verbal',
        color: 'text-greenTeal',
        background: 'bg-green-50',
        logo: verbalImage,
        label: 'Verbal',
        score: 61,
    },
    {
        type: 'visual',
        color: 'text-cobaltBlue',
        background: 'bg-indigo-50',
        logo: visualImage,
        label: 'Visual',
        score: 72,
    },
]

export { data }
