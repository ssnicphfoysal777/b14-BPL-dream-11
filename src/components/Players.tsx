import React, { use, useState, type Dispatch } from 'react';
import type { IPlayer } from '../Typs/Player';
import AvailablePlayers from './AvailablePlayers';
import SelectedPlayer from './players/SelectedPlayer';

interface playerProps {
    PlayersPromise: Promise<IPlayer[]>
    coin: number;
    setCoin: Dispatch<React.SetStateAction<number>>;
}

const Players = ({ PlayersPromise, coin, setCoin }: playerProps) => {

    const players = use(PlayersPromise)

    const [buttonType, setButtonType] = useState<"available" | "selected">("available");

    // const [SelectedPlayers, setSelectedPlayers] = useState<IPlayer[]>([]);
    const [selectedPlayers, setSelectedPlayers] = useState<IPlayer[]>([]);

    console.log(buttonType)
    const handleUpdateBtnType = (type: "available" | "selected") => {
        setButtonType(type);
    }


    return <div className='container mx-auto'>
        <div className='flex justify-between gap-4 mb-2' >
            <h2 className='font-bold text-xl'>{buttonType === 'available' ? "Available Players" : "Selected Plyers"}</h2>
            <div >
                <button
                    onClick={() => handleUpdateBtnType("available")}
                    className={`btn ${buttonType === "available" ? "btn-success" : ""} rounded-r-none`}
                >
                    Available
                </button>
                <button
                    onClick={() => handleUpdateBtnType("selected")}
                    className={`btn ${buttonType === "selected" ? "btn-success" : ""} rounded-r-none`}
                >
                    Selected
                </button>

            </div>
        </div>
        {buttonType === 'available' ? (
            <AvailablePlayers
                players={players}
                coin={coin}
                setCoin={setCoin}
                selectedPlayers={selectedPlayers}
                setSelectedPlayers={setSelectedPlayers}
            />) : (
            <SelectedPlayer
                selectedPlayers={selectedPlayers}
                setSelectedPlayers={setSelectedPlayers} 
                coin={coin}
                setCoin={setCoin}
                />
        )}
    </div>

};

export default Players;