export default function HealthStatus (person) {
    if (person.health > 50) {
        return 'healthy';
    }
    
    if (person.health <=50 && health >=15) {
        return 'wounded';
    } 
       
    return 'critical';
}