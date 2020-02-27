function convert_to_protein(arn) {
    let arn_arr = []
    let cordon = ""
    for (i = 0; i < arn1.length; i += 3) {
        cordon = arn[i] + arn[i+1] + arn[i+2]
        switch (cordon) {
            case 'UCU':
            case 'UCC':
            case 'UCA':
            case 'UCG':
            case 'AGU':
            case 'AGC':
                cordon = "Sérine" 
                break;
            case 'CCU':
            case 'CCC': 
            case 'CCA': 
            case 'CCG':
                cordon = "Proline" 
                break;
            case 'UUA':
            case 'UUG':
                cordon = "Leucine" 
                break;
            case 'UUU':
            case 'UUC':
                cordon = "Phénylalanine" 
                break;
            case 'CGU':
            case 'CGC':
            case 'CGA':
            case 'CGG':
            case 'AGA':
            case 'AGG':
                cordon = "Arginine"
                break;
            case 'UAU':
            case 'UAC':
                cordon = "Tyrosine" 
                break;
        }
        arn_arr.push(cordon)
    }
    return console.log(arn_arr.join('-'))
}

let arn1 = "CCGUCGUUGCGCUACAGC"
let arn2 = "CCUCGCCGGUACUUCUCG"

convert_to_protein(arn1)
convert_to_protein(arn2)

