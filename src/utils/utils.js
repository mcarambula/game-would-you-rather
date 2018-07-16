const diff = (all, discard) => {
    return all.filter(e => !discard.find(a => e == a.lang));
}

export default { diff };
