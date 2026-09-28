import React, { type Dispatch, type SetStateAction } from 'react';
import type { IPlayer } from '../../Typs/Player';
import SelectedPlayerCard from './SelectedPlayerCard';

interface ISelectedPlayersProps {
    coin: number;
    setCoin: Dispatch<SetStateAction<number>>;
    selectedPlayers: IPlayer[];
    setSelectedPlayers: Dispatch<SetStateAction<IPlayer[]>>;
}

const SelectedPlayer = ({
    selectedPlayers,
    setSelectedPlayers,
    coin,
    setCoin,
}: ISelectedPlayersProps) => {

    // console.log(selectedPlayers);
    // console.log(setSelectedPlayers);

if(selectedPlayers.length===0){
    return(
    <h2 className='font-bold text-3xl text-red-500 text-center my-10'>No selected player</h2>
    )
}

    return (
        <div className='grid grid-cols-1 gap-7 mt-6'>

            {selectedPlayers.map((player: IPlayer, ind:number) => {

                return <SelectedPlayerCard
                key={ind}
                    coin={coin}
                    setCoin={setCoin}
                    player={player}
                    selectedPlayers={selectedPlayers}
                    setSelectedPlayers={setSelectedPlayers} />


            })}
        </div>
    );
};

export default SelectedPlayer;