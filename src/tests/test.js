import HealthStatus from "../healthstatus";

test.each([
['Mary', 80, 'healthy'],
['Ivan', 35, 'wounded'],
['Lena', 5, 'critical'],
])('test healthStatus with name %s and health %i',(name, health, expected) => {
    const result = HealthStatus({name, health});
    
    expect(result).toBe(expected);
});

