const fs = require('fs')
const Visit = artifacts.require('./Visit.sol')//additopngame불러옴
module.exports = function (deployer) {
    deployer.deploy(Visit)//배포함
        .then(() => {//then 비동기 처리할때 콜백처리
            if (Visit._json) {
                fs.writeFile(//nodejs에서 제공되는 기능 
                    'deployedABI', JSON.stringify(Visit._json.abi),
                    (err) => {
                        if (err) throw err;
                        console.log(' 파일에 ABI 입력 성공 ');
                    }
                );
                fs.writeFile(
                    'deployedAddress', Visit.address,
                    (err) => {
                        if (err) throw err;
                        console.log(' 파일에 주소 입력 성공 ');
                    }
                );
            }
        });
}