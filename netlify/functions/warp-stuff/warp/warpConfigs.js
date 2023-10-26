import { WarpFactory, defaultCacheOptions } from 'warp-contracts';
import { DeployPlugin, ArweaveSigner } from 'warp-contracts-plugin-deploy';
import { LmdbCache } from 'warp-contracts-lmdb'


async function warp(network) {
  
  if (network === 'mainNet') {
    
    const warp = WarpFactory.forMainnet().use(new DeployPlugin())
    .useStateCache(new LmdbCache(
      { ...defaultCacheOptions, dbLocation: `./cache/warp/mainNet/state` }, 
      { maxEntriesPerContract: 100, minEntriesPerContract: 10 }
    ))
    .useContractCache(
      new LmdbCache({ ...defaultCacheOptions, dbLocation: `./cache/warp/mainNet/contracts` }), 
      new LmdbCache({ ...defaultCacheOptions, dbLocation: `./cache/warp/mainNet/src` }
    ));
    return warp

  } else if (network === 'testNet') {

    const warp = WarpFactory.forTestnet().use(new DeployPlugin())
    .useStateCache(new LmdbCache(
      { ...defaultCacheOptions, dbLocation: `./cache/warp/testNet/state` }, 
      { maxEntriesPerContract: 100, minEntriesPerContract: 10 }
    ))
    .useContractCache(
      new LmdbCache({ ...defaultCacheOptions, dbLocation: `./cache/warp/testNet/contracts` }), 
      new LmdbCache({ ...defaultCacheOptions, dbLocation: `./cache/warp/testNet/src` }
    ));
    return warp

  } else {
      throw new Error('Error init warp!')
  }
}


async function configureWallet() {
    try {
        const wallet = {
          kty: 'RSA',
          n: '17YFCGbaUefMBBrIkFHj79442UseQczaQ_fEDEBMHHCObUm1FAWFT3QqF8_wcc7VXeNzPWzkagUpqfHkeudbHQ0kQbASaPrmzMDiHBCF_NAZkfoX25IieBd3Hnb8PBMg_mfj0VdMtez6Pd074dNydcnEDmJ67wEgXi1ueaq9fUjVe1VkM3_3yn63gACnsbGLIwUngTbKzaMebGbBJSyfTV6obP65R7cv4nswzJ9YadXKhQyendJCOs_yWw-qIEL_NVEiSWZjQkClhDD4ZDuxKqyEQqGPDFOJIm_ugFltqu1yTNhBMGIPdPQ7XcdyDh8mczKwsjA6jOSTY1SYlMlpohYHdtI2ksl0LAslSYNiH1C5ZkTcvvmN-tEFO1D5RO-bXOld2vX5H7qdAfzFiRjxktZQBAhuEMl-G8Nc5Xv3LoKG0RF7OkOO-xXrXZJVYVoktAW_8nL34OI1xzoDcu0PNEuFHuQ-WcuCuhejwsSVxHmFIsaunHkBEVJfpisT0qH0fQibXfCMY5TIvMsbqzA6nfrCUEVZy0jlES_yP8mlpqthkC93p-tqwHGtFabtvba5uLa1I9nC6WaQZO8HgYN36G1egH9UkrxAN6IQf6zvtSPw9wCbqiQFViRPeQ0QFiOdoFO6vmAzwzxI3i6ozu9lbUYoG4Ld57zbP0RGiAwxFCc',
          e: 'AQAB',
          d: 'A_6BUloBMeIOY4cRbqath0wAlnlvGn3ODtMgJK_uGNq2sGxcd33wrXtzqhQ2Gg1f4wiqohkJk7L7xgNOHT56b-vF35eAh8QZkPIDXcyqhndd-dd9KJoonDum_3_phL0_76YB0GcC6x1ztsCJctGE_YxaXn_RUeqd7FCACq2wK4k1Nr7qh4-XiX7WK_8XG9GzR1c5l4lpsOwTzKMMcYFFg9u8V6RRzvOj5dgtG6TZsL_-K3-D0l1Jz6f5D1mXZ1iGPDj_3wcP0HK8_dkgSE7YpXcjTc6LBQno8KPM8UB2qOMTqjuY3Wn7akl5be-a-4r1Hc3y-qGs-93hosW2u46NL6PqdCtLcgJKlHscQ5XfFft3eYBS27ipim8rKgdZ2Qf_iMJYcNvpJ263srH4Yzx22e99WBDDwINXAb1WrCHjlPD2kuVGpsQRKvCMvqix29bg7jGJvY_e4o7JQLl6Q2lpl2xIa6bJ-KdIw02BeAHGSstxWoNumX3dbj85TXia0IN-c1jrY7XoE8nUAMisex90AILalIqBEBILqf1iy8T0DQdxlrHfOtNAcUSPe9ht-NyLw6rktRSbCcgYyHI-3i1Vd1A0Gu384AvSR1x8dNaHs96GLEJW-ryTZFRBbyju0KU4F3CniVPYCEN6T1FS4xFXf7usAvhAK9SQ56GJMndB9-E',
          p: '_BAcNLP2HrDFv-15_bm6pQJD3aXhsq3ZWez87Awt6JkiUiaWUcZacTKSa9C9Swht9BsEBKzbDDwDJINsUa3QRjD4W2g9t4wpGFwYUn6EU85i4609MRFbOXZH_AHwfJInIyXAWC-8iPsQrjrJ-a0THzhf-CkMug5TffPHzi9XWE22tUkAFZBu99ls2jAJc_-BlOj9TbMtiuC1GPdX72BDkEPiPqk2kalpBkMuijvg-yN1tqTqVuoJ6PEUn2cZaQbCkQSpRUMB0eWYvB9hQBFkDL1V02HZzuBgXiam4AQPD7937HkJWX1FpsfAzYeoorLnmCTI2GsHJ79-ND9mM2g7Bw',
          q: '2xSN033oJAvpk4aQGZwwPHFrOhk3CThKqepRe6FhUVu6JDNSfZcCfgXThpoKLJ0CNtk4h26qfH1A8k2B6DX-30x9FK4IhopBVNuzERuhD-ECB5yMn8nzvoRSDFPOqhRzLvIAGSnXHVApMmXOBZklb8lXlCrdYvxsDNe7yPMDSra8VRCgCM6p2P83U7MIK5dp2cCO97wDS_GTqs2EOhW2wLHZgx-D60Ld5-640xuz6H6x05PDhLiDsdJAYKXobg60ORXHLJu82_CuIw2iszcL9BFk8eVO5Z_4RkMadTNa7VFO9QbaZDKeLNpJ3SF9Krf9yRHZafiA3K4DbArt2s114Q',
          dp: 'eRxAgS4qxopHKbWv1LJltJ0HALuQWyre8S9GQyCC-myBqhkyRq5YjGUxJy6PlTrCofRNFPX89b7r_6JJ7GDoXqFu43SNmuB0amjtos15RU84Ao8dhLMDMvPbGIHSC_ipZ2DfL0AYhXSkiiJjI1z-gBS1P-ZxYAA8K5tzWGU0wY_thuNBcBsKxnmorJlCIYMVvvfHpYq_Cih3uzw0-yY0sF99mH_zYT-V39VtyiuFKQXbrFtG4WXoRw12zDRcaDNATy9_KXFNsY1wuosVThRNDzX1w_ATGCyFARfvPFmW5wknVO6_CEmBquX1hIt3Al2Vm2upORsLwBRpTi9cKr0dBw',
          dq: '1OtfA6MkkJP7SOPI_PrtbnEUs3x6Hr3U4trWon8vo_CwMiqnC2ROiciD0he3t7BIzKHE7OtDSoY5LsThcpu3v7IJBqY1pvyLjjuQBxqBKHuYi2k8yrdt60WSsGRrQKVrZL7SFaKybMzRnSeQWaSD2-ck9N3MGD4XjUvGOADmvCBpXYsw3h5suHcigHhJgoQ_3d_lkyPpWE_LIn9m-UTNPu4a5fMlNOrh3F4IxzPvYBByJ50-sqjZZWNgKg5UnVIxGiHuV45suJ1rwKmp7N-dAHI_V1FzonwcwbzJ5AorXuZdBIrKigMf85ubmgzIJ1J2loqAcRuRseh1bvYYQUTaQQ',
          qi: '7Wl-U1ZKhc_hoUP934qmh4VlrUKHX37FHDpro3PjpufKQavoTDGXmSNNWBQjNWWeFpuZ3MTAnkEbiHJvHwSCSuj7WtrnIF4q3yMjcNn70Ar69BIEsHg5Wi7S5TQJ3bii5PK5yKZqC9odVLf2TVzQAaXT9GLSVp1UR1oFd2D7hL3N_hoRiWanRULUEI_fKus7_FXHyVywfYfVObRKEM4MMOmPhZThT_NQT1oVVoPjqs1bhYO-tpaPQ1CU2W5T834Nb0E5cc_Bd6KOhfCalkneY5dTPSn3ntq012jGoin1jXNQTkR_C4jzBV8843HYyebpAKxZpnatbyYYI5xzTfDnlQ'
      }
        const jwk = new ArweaveSigner(wallet)
        return jwk
    } catch (err) {
        console.log('Error configure\'ing Wallet')
    }
}

export {
    configureWallet, 
    warp
}