import React, { useState, type Dispatch, type SetStateAction } from 'react';
import { FaUser } from 'react-icons/fa';
import type { IPlayer } from '../../Typs/Player';
import { toast } from 'react-toastify';

interface IPlayerCardProps {
    player: IPlayer;
    coin: number;
    setCoin: Dispatch<SetStateAction<number>>;
    SelectedPlayer: IPlayer[];
    setSelectedPlayers: Dispatch<SetStateAction<IPlayer[]>>;
}

const PlayerCard = ({ player, coin, setCoin, SelectedPlayer, setSelectedPlayers }: IPlayerCardProps) => {
    const [isSelected, setIsSelected] = useState(false);

    const handleSelectPlayer = () => {
        if (isSelected) return;

        const newCoinPrice = coin - player.price;

        if (newCoinPrice < 0) {
            toast.error('Coin is not enough to purchase');
            return;
        }
        //selected players
        setSelectedPlayers([...SelectedPlayer,player])

        setIsSelected(true);
        setCoin(newCoinPrice);
        setSelectedPlayers([...SelectedPlayer, player]);
        toast.success(`${player.playerName} is purchase successfully`);
    };
     
    return (
        <div className="card bg-base-100 border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">

            {/* Player Image */}
            <figure className="bg-gray-100 h-64">
                <img
                    src={player.playerImg}
                    alt={player.playerName}
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                />
            </figure>

            {/* Card Body */}
            <div className="card-body p-5">

                {/* Player Name */}
                <h2 className="card-title text-xl font-bold flex items-center gap-2">
                    <FaUser className="text-primary" />
                    {player.playerName}
                </h2>

                {/* Origin + Type */}
                <div className="flex items-center justify-between mt-2">
                    <p className="font-semibold text-gray-600">
                        {player.origin}
                    </p>

                    <span className="badge badge-primary badge-outline">
                        {player.playerType}
                    </span>
                </div>

                <div className="divider my-2"></div>

                {/* Rating / Playing Style */}
                <h3 className="font-bold text-lg mb-2">
                    Player Details
                </h3>

                <div className="space-y-2">

                    <div className="flex justify-between items-center">
                        <span className="text-gray-500">
                            Batting
                        </span>

                        <span className="font-semibold">
                            {player.battingStyle}
                        </span>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="text-gray-500">
                            Bowling
                        </span>

                        <span className="font-semibold">
                            {player.bowlingStyle}
                        </span>
                    </div>

                </div>

                <div className="divider my-3"></div>

                {/* Price + Button */}
                <div className="card-actions flex items-center justify-between">

                    <div>
                        <p className="text-xs text-gray-500">
                            Price
                        </p>

                        <h2 className="font-bold text-2xl text-primary">
                            ৳{player.price}
                        </h2>
                    </div>

                    <button onClick={()=> handleSelectPlayer()}
                     className={`btn btn-primary`}
                     disabled={isSelected? true:false}
                     >
                        {isSelected=== true ? "Selected":"Choose Player"}
                    </button>

                </div>

            </div>
        </div>
    );
};

export default PlayerCard;