export const LinkOrUnlinkToTournament = (playerId: string, linkOrUnlink: boolean) => {
    if (playerId === undefined) return;

    if (!linkOrUnlink) {
        return {
            disconnect: {
                id: playerId
            },
        }
    }

    return {
        connect: {
            id: playerId,
        },
    }
}