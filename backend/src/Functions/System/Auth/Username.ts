
export const usernameOfUser = (fName: string, lName: string) => {
    const username = '@' + fName + '_' + lName
    return username.toLowerCase()
}