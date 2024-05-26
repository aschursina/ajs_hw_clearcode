import HealthStatus from "../healthstatus";

test.each([
['Mary', 80, 'healthy'],
['Ivan', 35, 'bounded'],
['Lena', 5, 'critical'],
])('test healthStatus with name %i and health %i',(name, health, expected) => {
    const result = HealthStatus({name, health});
    
    expected(result).toBe(expected);
})

