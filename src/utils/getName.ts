

export function getName(nameUser: string) {
    const titles = ['Mr.', 'Mrs.', 'Ms.', 'Miss', 'Dr.', 'Prof.', 'Mx.', 'Fr.'];
    let cleanName = nameUser;
    for (const title of titles) {
        cleanName = cleanName.replace(title, '').trim();
    }
    const parts = cleanName.split(' ');
    
    if (parts.length === 1) {
        return { firstName: parts[0], lastName: '' };
    }
    
    const firstName = parts[0];
    const lastName = parts.slice(1).join(' ');
    
    return { firstName, lastName };
}
