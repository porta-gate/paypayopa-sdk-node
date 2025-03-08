import { payPayRestSDK } from '../src/lib/paypay-rest-sdk'
import { HttpsClient } from '../src/lib/httpsClient'
import { v4 as uuidv4 } from 'uuid'

const conf = {
    clientId: 'test',
    clientSecret: 'test',
    merchantId: 'test',
}

payPayRestSDK.configure(conf)

const httpsClient = new HttpsClient()
payPayRestSDK.setHttpsClient(httpsClient)

test('Unit Test - Reversal Cash Back', async () => {
    const payload = {
        merchantCashbackReversalId: uuidv4(),
        merchantCashbackId: 'testId',
        amount: {
            amount: 1,
            currency: 'JPY',
        },
        requestedAt: 1609749559,
        orderDescription: 'order description',
        walletType: 'PREPAID',
        expiryDate: '',
        metadata: '',
    }

    const response = {
        resultInfo: { code: 'REQUEST_ACCEPTED', message: 'Request accepted', codeId: '08100001' },
        data: null,
    }

    const mockHttpsCall = jest.spyOn(httpsClient, 'httpsCall')
    mockHttpsCall.mockImplementation(
        jest.fn((_options: any, _payload = '', _callback: any) => {
            _callback(response)
        }),
    )

    await payPayRestSDK.reverseCashBack(payload, (result: any) => {
        expect(result).toEqual(response)
    })

    expect(mockHttpsCall).toHaveBeenCalledTimes(1)
    expect(mockHttpsCall).toHaveBeenCalledWith(expect.anything(), payload, expect.anything())

    mockHttpsCall.mockClear()
})
