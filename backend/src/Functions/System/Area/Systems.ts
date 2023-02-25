/* eslint-disable prefer-const */
import { RoomsModel } from '../../../Model/Rooms/Rooms.model'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function PrivetArea(RoomId: any, NewCost: number): Promise<void> {
    let userWin = ''
    let WinCost = 0
    
    let Room = await RoomsModel.findById(RoomId)
    for (const userFind in Room?.UserIncludes) {
        if (Room.StartCost < WinCost) {
            userWin = userFind
            WinCost = NewCost
            await RoomsModel.findByIdAndUpdate(RoomId, {
                $set: {
                    StartCost: WinCost,
                    WinID: userWin,
                },
            })
        }

    }
    
}