import {parseISO, format} from 'date-fns';

export default function FormattedDate({ dateString }) {  
    const date = parseISO(dateString);
    //separating the machine readable value dateTime different from the localized display string
    return <time dateTime={dateString}>{format(date, 'LLLL d,yyyy')}</time>;
}