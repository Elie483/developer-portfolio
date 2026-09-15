import { Globe, Server, Webhook, Database, Wrench, Network } from 'lucide-react';
import { services } from '../../data/services';

const iconMap = {
  Globe,
  Server,
  Webhook,
  Database,
  Wrench,
  Network,
};

export function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-[var(--color-bg-secondary)]">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-[var(--color-accent)] text-sm mb-2">
          06. Services
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-10">
          What I can help with
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.title}
                className="p-6 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)]"
              >
                <Icon size={24} className="text-[var(--color-accent)] mb-4" />
                <h3 className="text-base font-bold text-[var(--color-text)] mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}