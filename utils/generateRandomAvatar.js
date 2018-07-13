function generateRandomAvatar() {
    const style = {
        'avatarStyle' : ['Circle'],
        'topType' : ['ShortHairShortFlat', 'LongHairStraight', 'LongHairNotTooLong', 'ShortHairDreads01', 'ShortHairShaggyMullet'],
        'accessoriesType' : ['Blank'],
        'hairColor' : ['Auburn','Black','Blonde','BlondeGolden','Brown','BrownDark','PastelPink','Platinum','Red','SilverGray'],
        'facialHairType' : ['Blank'],
        'clotheType': ['BlazerShirt','BlazerSweater','CollarSweater','Hoodie','Overall','ShirtVNeck'],
        'clotheColor' : ['Blue02','Gray01','Gray02','PastelBlue','PastelGreen','PastelRed','PastelYellow','Pink'],
        'eyeType' : ['Close','Default','Happy','Surprised'],
        'eyebrowType' : ['Default','DefaultNatural','FlatNatural','UpDown','UpDownNatural'],
        'mouthType' : ['Default', 'Smile'],
        'skinColor' : ['Tanned', 'Yellow', 'Pale', 'Light', 'Brown', 'DarkBrown', 'Black']
    }

    function getRandomType(prop, attribute) {
        const index = Math.floor(Math.random() * attribute.length);
        return `&${prop}=${attribute[index]}`;
    }
    let params = '';
    Object.keys(style).forEach(prop =>{
        params += getRandomType(prop, style[prop]);
    });
    return `https://avataaars.io/?${params.substr(1)}`;
}
