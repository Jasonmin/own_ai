import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(-1, 1, 50)
y = 2*x*x + 1
# y2 = x+10

plt.figure()
plt.xlabel('Time')
plt.ylabel('Income')
plt.title('Income with time')
plt.legend(loc = 'upper right')
plt.plot(x, y,color = 'red',linewidth=3.0)
plt.show()

# plt.figure(num=3, figsize=(8, 5),)
# plt.plot(x, y2, color='green', linewidth=1.0)
# plt.show()