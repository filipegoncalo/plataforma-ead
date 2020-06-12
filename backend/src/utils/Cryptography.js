const crypto=require('crypto');
module.exports={

    crypt(value) {

        try{
            var mykey = crypto.createCipher('aes-128-cbc', 'plataformaEad');
            var mystr = mykey.update(value, 'utf8', 'hex')
            mystr += mykey.final('hex');

        }catch{
            return "";
        }


        return mystr;
    },

    decrypt(value) {

        try{

            var mykey = crypto.createDecipher('aes-128-cbc', 'plataformaEad');
            var mystr = mykey.update(value, 'hex', 'utf8');
            mystr += mykey.final('utf8');

        }catch{
            return "";
        }
        return mystr ;

    }
}