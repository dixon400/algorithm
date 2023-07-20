def multiplier(seq, mul):
    resp = [n * mul for n in seq if isinstance(n, (int, float))]
    print(resp)
    return resp


multiplier([1, None, 2.5, 'string', 10, {}, [],], 3)