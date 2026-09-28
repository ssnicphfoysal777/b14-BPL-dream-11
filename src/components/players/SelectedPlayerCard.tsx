import React, { type Dispatch, type SetStateAction } from 'react';
import type { IPlayer } from '../../Typs/Player';
import { BiTrash } from 'react-icons/bi';
interface ISelectedPlayerCardProps {
    coin: number;
    setCoin: Dispatch<SetStateAction<number>>;
    player: IPlayer
    selectedPlayers: IPlayer[];
    setSelectedPlayers: Dispatch<SetStateAction<IPlayer[]>>;
}


const SelectedPlayerCard = ({
    player,
    coin,
    setCoin,
    selectedPlayers,
    setSelectedPlayers
}: ISelectedPlayerCardProps) => {
    const handleRemovePlayer = (player: IPlayer) => {
        const restPlayers = selectedPlayers.filter(
            selectedPlayers => selectedPlayers.playerName != player.playerName)


        setSelectedPlayers(restPlayers)
        const newCoinPrice = coin + player.price
        setCoin(newCoinPrice)
    }
    return (
        <div className='flex gap-2 justify-between items-center'>
            <div className='flex gap-2 '>
                <img src={player.playerImg} alt="" className='h-10 w-10' />
            </div>
            <div>
                <h2 className='font-bold text-2xl'>{player.playerName}</h2>
                <p>{player.playerType}</p>
            </div>
            <span className='text-red-500 font-bold cursor-pointer' onClick={() => handleRemovePlayer(player)}>
                <BiTrash />
            </span>
        </div>
    );
};

export default SelectedPlayerCard;