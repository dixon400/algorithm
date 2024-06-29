def sieve_of_eratosthenes(limit):
    """Apply the Sieve of Eratosthenes to find all prime numbers up to the given limit."""
    primes = []
    sieve = [True] * (limit + 1)
    for num in range(2, limit + 1):
        if sieve[num]:
            primes.append(num)
            for i in range(num * num, limit + 1, num):
                sieve[i] = False
    return primes

# Initially, we don't know the upper limit for the 100th prime, so we start with an estimate and increase if needed
upper_limit = 1000  # A starting guess
primes_list = sieve_of_eratosthenes(upper_limit)

# If the list is shorter than 100, increase the limit and try again
while len(primes_list) < 100:
    upper_limit *= 2  # Doubling the limit to ensure we cover enough range
    primes_list = sieve_of_eratosthenes(upper_limit)

# Extracting the first 100 primes
first_100_primes = primes_list[:100]
first_100_primes[-10:]  # Displaying the last 10 of the first 100 primes for verification
