export const validateDate: any = (date: any): boolean => isNaN(Date.parse(date));

export const ucfirst = (fullName: string): string => {
    const fullNameArray = fullName.split(' ');
    const newArrayName = fullNameArray.map((partialName: string) => {
        if(partialName.length === 2){
            return partialName;
        }
        const name = partialName.split('');
        name[0] = name[0].toUpperCase();
        name.forEach((n, index) => {
            if(index === 0){
                n = n
            }else{
                name[index] = n.toLowerCase();
            }

        });
        return name.join('');
    });

    return newArrayName.join(' ');
}

export const verifyIfItsEmail = (email:string): boolean => {
    const regexCheck = RegExp(/@(.*)\.com/gmi);
    return regexCheck.test(email);
}
