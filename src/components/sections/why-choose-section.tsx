import { GradientBadge } from "../ui/gradient-badge";
import { CodeBlock } from "../ui/code-block";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

export const WhyChooseSection = () => {
  const features = [
    "Experienced Data Scientists & Analysts",
    "Custom Solutions Tailored to Your Needs",
    "Proven Track Record of Success",
    "End-to-End Implementation Support",
    "Ongoing Optimization & Training",
  ];

  const sampleCode = `import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_squared_error, r2_score
import matplotlib.pyplot as plt
import seaborn as sns

class PredictiveAnalytics:
    def __init__(self, data_path):
        """Initialize with data source path."""
        self.data = pd.read_csv(data_path)
        self.model = None
        self.scaler = StandardScaler()
        self.metrics = {}
    
    def preprocess_data(self):
        """Clean and prepare data for analysis."""
        # Handle missing values strategically
        numeric_cols = self.data.select_dtypes(include=[np.number]).columns
        for col in numeric_cols:
            self.data[col] = self.data[col].fillna(self.data[col].median())
        
        # Create advanced features
        self.data['revenue_growth'] = self.data.groupby('customer_id')['revenue'].pct_change()
        self.data['engagement_score'] = (
            self.data['visit_frequency'] * 0.4 +
            self.data['time_spent'] * 0.3 +
            self.data['purchase_rate'] * 0.3
        )
        
        # Extract temporal features
        self.data['month'] = pd.to_datetime(self.data['date']).dt.month
        self.data['quarter'] = pd.to_datetime(self.data['date']).dt.quarter
        self.data['year'] = pd.to_datetime(self.data['date']).dt.year
        
        return self.data
    
    def train_predictive_model(self, target_col, features):
        """Train an advanced predictive model."""
        # Prepare features and target
        X = self.data[features]
        y = self.data[target_col]
        
        # Split data with time-based validation
        train_idx = self.data['date'] < '2024-01-01'
        X_train, X_test = X[train_idx], X[~train_idx]
        y_train, y_test = y[train_idx], y[~train_idx]
        
        # Scale features
        X_train_scaled = self.scaler.fit_transform(X_train)
        X_test_scaled = self.scaler.transform(X_test)
        
        # Train advanced model
        self.model = RandomForestRegressor(
            n_estimators=200,
            max_depth=15,
            min_samples_split=10,
            random_state=42
        )
        self.model.fit(X_train_scaled, y_train)
        
        # Calculate performance metrics
        y_pred = self.model.predict(X_test_scaled)
        self.metrics = {
            'r2_score': r2_score(y_test, y_pred),
            'rmse': np.sqrt(mean_squared_error(y_test, y_pred)),
            'feature_importance': dict(zip(features, 
                                        self.model.feature_importances_))
        }
        
        return self.metrics

    def generate_insights(self):
        """Generate actionable business insights."""
        key_metrics = {
            'total_revenue': self.data['revenue'].sum(),
            'avg_engagement': self.data['engagement_score'].mean(),
            'growth_rate': self.data['revenue_growth'].mean() * 100,
            'customer_segments': len(self.data['customer_id'].unique())
        }
        
        # Advanced correlations analysis
        correlation_matrix = self.data[[
            'revenue', 'engagement_score', 
            'visit_frequency', 'purchase_rate'
        ]].corr()
        
        return key_metrics, correlation_matrix

# Example Implementation
analytics = PredictiveAnalytics('customer_data.csv')
processed_data = analytics.preprocess_data()

features = ['engagement_score', 'visit_frequency', 
           'time_spent', 'purchase_rate', 
           'month', 'quarter']

metrics = analytics.train_predictive_model('revenue', features)
business_insights, correlations = analytics.generate_insights()

print("Model Performance:")
print(f"R² Score: {metrics['r2_score']:.2f}")
print(f"RMSE: \${metrics['rmse']:,.2f}")
print("\\nKey Business Metrics:")
print(f"Total Revenue: \${business_insights['total_revenue']:,.2f}")
print(f"Average Engagement Score: {business_insights['avg_engagement']:.2f}")
print(f"Growth Rate: {business_insights['growth_rate']:.1f}%")`; 

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative flex flex-col lg:flex-row gap-12 items-center">
          {/* Content Column */}
          <div className="w-full lg:w-1/2 z-20">
            <GradientBadge className="mb-4">
              Why Choose Us
            </GradientBadge>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              Why Choose DataFusion?
            </h2>
            <p className="text-gray-400 mb-8">
              With years of experience across industries, our data consultants bring both technical
              expertise and business acumen to every project. We don't just analyze data – we deliver
              actionable insights that create real business value.
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <HoverBorderGradient>
                Learn More About Us
              </HoverBorderGradient>
            </div>
          </div>

          {/* Code Display Column */}
          <div className="w-full lg:w-1/2 relative h-[500px]">
            <div className="relative lg:absolute lg:-right-[30%] w-[120%] rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-purple-500/10 rounded-lg" />
              <CodeBlock
                language="python"
                filename="predictive_analytics.py"
                code={sampleCode}
                highlightLines={[18, 19, 20, 21, 22, 23, 58, 59, 60, 61, 62, 63, 64, 65, 66]}
              />
            </div>
            {/* Background gradient effects */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 opacity-10 blur-2xl rounded-full transform -rotate-12" />
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 opacity-10 blur-3xl rounded-full transform rotate-12" />
          </div>
        </div>
      </div>
    </section>
  );
};