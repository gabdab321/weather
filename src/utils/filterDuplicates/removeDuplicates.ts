import {IPlace} from "../../models/IPlace";
import {formatPlace} from "../formatPlace/formatPlace";

/**
 * Removes all duplicates from autocomplete places array. Finds duplicates by formatted property.
 * @param places {IPlace[]} - an array which will get filtered.
 * @returns {IPlace[]} - new array without duplicates  */

export function removeDuplicates(places: IPlace[]): IPlace[] {
    const unique: IPlace[] = [];
    const seenFormatted: any = {}

    for(const place of places) {
        const formatted = place.properties.formatted

        /* pushes place into unique array only if it has not appeared yet. */
        if(!seenFormatted[formatted]) {
            unique.push(place)
            seenFormatted[formatted] = true
        }
    }

    return unique
}