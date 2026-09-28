import React, { type Dispatch, type SetStateAction } from 'react';
import type { IPlayer } from '../Typs/Player';
import { FaUser } from 'react-icons/fa';
import PlayerCard from './players/PlayerCard';

interface IAvailableProps {
    players: IPlayer[];
    coin: number;
    setCoin: Dispatch<SetStateAction<number>>;
    selectedPlayers: IPlayer[];
    setSelectedPlayers: Dispatch<SetStateAction<IPlayer[]>>;
}
const AvailablePlayers = ({
    players,
    coin,
    setCoin,
    selectedPlayers,
    setSelectedPlayers
}: IAvailableProps) => {


    return (
        <div className='grid grid-cols-3 gap-7 mt-6'>
            {
                players.map((player: IPlayer, ind: number) => {
                    return <PlayerCard
                        key={ind}
                        player={player}
                        coin={coin}
                        setCoin={setCoin}
                        SelectedPlayer={selectedPlayers}
                        setSelectedPlayers={setSelectedPlayers}
                    />

                })
            }

        </div>
    );
};

export default AvailablePlayers;