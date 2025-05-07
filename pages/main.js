const ctx = document.getElementById('iqChart').getContext('2d');
const iqChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['إعاقة عقلية شديدة', 'إعاقة عقلية متوسطة', 'إعاقة عقلية بسيطة', 'الحد الفاصل', 'العاديون', 'فوق المتوسط', 'المتفوقون', 'الموهوبون'],
    datasets: [{
      label: 'نسبة الذكاء (IQ)',
      data: [25, 40, 60, 85, 100, 115, 130, 145],
      backgroundColor: [
        '#e53935', '#fb8c00', '#fdd835', '#81c784',
        '#4fc3f7', '#1e88e5', '#5e35b1', '#d81b60'
      ],
      borderRadius: 6
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 160,
        title: {
          display: true,
          text: 'IQ'
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: (context) => `IQ: ${context.parsed.y}`
        }
      },
      title: {
        display: true,
        text: 'مستويات الذكاء حسب الفئة'
      }
    }
  }
});