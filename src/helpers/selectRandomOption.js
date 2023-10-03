const randomOptions = ['One Punch', 
                        'Demon Slayer', 
                        'Dragon Ball',
                        'Hunter X Hunter',
                        'Jujutsu Kaisen',
                        'Metal Gear Solid',
                        'Dark Souls',
                        'Grand Theft Auto',
                        'Minecraft',
                        'Monster Hunter Rise',
                    ]

export const selectRandomOption = () => {
    return randomOptions[(Math.floor(Math.random() * randomOptions.length))];
}