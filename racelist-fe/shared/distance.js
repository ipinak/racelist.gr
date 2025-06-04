export const extractDistance = (distanceString) => {
    const match = distanceString.match(/(\d+(\.\d+)?)\s*(km|m)?/i);
    if (match) {
        const value = parseFloat(match[1]);
        const unit = match[3] ? match[3].toLowerCase() : 'm';
        return { value, unit };
    }
    return null;
}